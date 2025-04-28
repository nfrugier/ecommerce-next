'use client';

interface SwitchToggleProps {
  enabled: boolean;
  setEnabled: (enabled: boolean) => void;
  label?: string;
}

export default function SwitchToggle({ enabled, setEnabled, label }: SwitchToggleProps) {
  return (
    <div className="flex items-center gap-4">
      <button
        type="button"
        onClick={() => setEnabled(!enabled)}
        className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors ${
          enabled ? 'bg-green-500' : 'bg-gray-300'
        }`}
      >
        <span
          className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${
            enabled ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
      {label && <span className="text-sm">{label}</span>}
    </div>
  );
}
