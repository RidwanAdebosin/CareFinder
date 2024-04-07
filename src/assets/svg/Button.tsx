// // adding a typescript to detect early error
// interface ButtonProps {
//   onClick: () => void;
//   children: React.ReactNode;
// }

// // creating a reuseable button component
// export function Button({ children, onClick }: ButtonProps) {
//   return (
//     <div data-testid="button">
//       <button onClick={onClick} className="btn">
//         {children}
//       </button>
//     </div>
//   );
// }

export function Button({ onClick }) {
  return <button>Click</button>;
}
