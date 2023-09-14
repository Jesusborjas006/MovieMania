type ErrorMessageProps = {
  message: string;
};

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <p className="text-center mt-20 text-xl font-semibold md:text-3xl">
      {message}
    </p>
  );
};

export default ErrorMessage;
