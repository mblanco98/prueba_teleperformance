export const FormItem = ({ label, children }) => {
  const htmlFor = label.toLowerCase().trim().replace(' ', '-')
  return (
    <div className="rounded-md shadow-sm -space-y-px">
      <label htmlFor={htmlFor} className="sr-only">
        {label}
      </label>
      { children }
    </div>
  );
}