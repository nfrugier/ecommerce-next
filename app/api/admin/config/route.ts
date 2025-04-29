import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

// GET /api/admin/config
export async function GET() {
  const config = await prisma.boutiqueConfig.findFirst({
    include: {
      adresse: true, // on inclut l'adresse liée
    },
  });

  if (!config) {
    return NextResponse.json({ message: 'Configuration non trouvée.' }, { status: 404 });
  }

  return NextResponse.json(config);
}

// PUT /api/admin/config
export async function PUT(req: Request) {
  const data = await req.json();

  const existingConfig = await prisma.boutiqueConfig.findFirst({
    include: { adresse: true },
  });

  if (existingConfig) {
    let adresseId = existingConfig.adresseId;

    if (data.adresse) {
      if (adresseId) {
        // Update l'adresse existante
        await prisma.adresse.update({
          where: { id: adresseId },
          data: {
            rue: data.adresse.rue,
            codePostal: data.adresse.codePostal,
            ville: data.adresse.ville,
            pays: data.adresse.pays,
          },
        });
      } else {
        // Crée une nouvelle adresse et récupère son ID
        const newAdresse = await prisma.adresse.create({
          data: {
            rue: data.adresse.rue,
            codePostal: data.adresse.codePostal,
            ville: data.adresse.ville,
            pays: data.adresse.pays,
          },
        });
        adresseId = newAdresse.id;
      }
    }

    const updated = await prisma.boutiqueConfig.update({
      where: { id: existingConfig.id },
      data: {
        nom: data.nom,
        emailGerant: data.emailGerant,
        adresseId: adresseId,
        stripeTestKey: data.stripeTestKey,
        stripeProdKey: data.stripeProdKey,
        sendcloudTestKey: data.sendcloudTestKey,
        sendcloudProdKey: data.sendcloudProdKey,
        maintenanceMode: data.maintenanceMode,
        testMode: data.testMode,
      },
      include: {
        adresse: true,
      },
    });

    return NextResponse.json(updated);
  } else {
    // Crée une nouvelle config boutique avec une adresse
    let adresse = null;
    if (data.adresse) {
      adresse = await prisma.adresse.create({
        data: {
          rue: data.adresse.rue,
          codePostal: data.adresse.codePostal,
          ville: data.adresse.ville,
          pays: data.adresse.pays,
        },
      });
    }

    const created = await prisma.boutiqueConfig.create({
      data: {
        nom: data.nom,
        emailGerant: data.emailGerant,
        adresseId: adresse?.id,
        stripeTestKey: data.stripeTestKey,
        stripeProdKey: data.stripeProdKey,
        sendcloudTestKey: data.sendcloudTestKey,
        sendcloudProdKey: data.sendcloudProdKey,
        maintenanceMode: data.maintenanceMode,
        testMode: data.testMode,
      },
      include: {
        adresse: true,
      },
    });

    return NextResponse.json(created);
  }
}
