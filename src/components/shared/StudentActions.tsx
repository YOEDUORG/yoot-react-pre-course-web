import { Pencil, Trash2 } from "lucide-react";

type Props = {
  onEdit: () => void;
  onDelete: () => void;
};

export default function StudentActions({ onEdit, onDelete }: Props) {
  return (
    <div className="flex gap-4">
      <button onClick={onEdit} className="text-gray-500 hover:text-blue-500">
        <Pencil className="w-4 h-4" />
      </button>

      <button onClick={onDelete} className="text-gray-500 hover:text-red-500">
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  );
}