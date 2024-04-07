// adding a typescript to detect early error
interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

// creating a reuseable button component
export function Button({ children, onClick }: ButtonProps) {
  return (
    // <div data-testid="button">
    <button onClick={onClick} className="btn" data-testid="button">
      {children}
    </button>
    // </div>
  );
}
