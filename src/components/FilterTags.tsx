import { Button } from "@/components/ui/button";

interface FilterTagsProps {
  tags: string[];
  selectedTag: string;
  onSelectTag: (tag: string) => void;
}

export const FilterTags = ({ tags, selectedTag, onSelectTag }: FilterTagsProps) => {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 mb-4">
      {tags.map((tag) => (
        <Button
          key={tag}
          variant={selectedTag === tag ? "default" : "outline"}
          className={`rounded-full ${
            selectedTag === tag ? "bg-primary text-white" : "bg-white text-primary"
          }`}
          onClick={() => onSelectTag(tag)}
        >
          {tag}
        </Button>
      ))}
    </div>
  );
};