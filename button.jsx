export function Button({ children, ...props }) {
  return <button {...props} className="bg-black text-white px-4 py-2 rounded hover:opacity-90">{children}</button>
}