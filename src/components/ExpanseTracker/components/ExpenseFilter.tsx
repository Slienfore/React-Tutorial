import categories from "../category";

interface Props {
  onSelectCategory: (category: string) => void; // prop the value to father
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <select
      onChange={(e) => onSelectCategory(e.target.value)}
      className="form-select"
    >
      <option value="">All categories</option>
      {categories.map((category) => (
        <option value={category} key={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
