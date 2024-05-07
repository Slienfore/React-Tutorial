// as const: 确保 categories 不能修改(readonly)
const categories = ["Groceries", "Utilities", "Entertainment"] as const;

export default categories;