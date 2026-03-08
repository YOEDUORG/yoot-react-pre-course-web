type Props = {
  active: boolean;
  onToggle: () => void;
};

export default function StatusToggle({ active, onToggle }: Props) {
  return (
    <button
      onClick={onToggle}
      className={`px-3 py-1 rounded text-sm ${
        active
          ? "bg-green-100 text-green-700"
          : "bg-red-100 text-red-700"
      }`}
    >
      {active ? "Active" : "Inactive"}
    </button>
  );
}