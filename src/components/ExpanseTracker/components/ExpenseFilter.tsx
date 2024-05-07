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
      <option value="Groceries">Groceries</option>
      <option value="Utilities">Utilities</option>
      <option value="Entertainment">Entertainment</option>
    </select>
  );
};

export default ExpenseFilter;
