const Error = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Payment Failed</h1>
        <p className="text-lg text-gray-700">
          Your payment was not completed. Please try again.
        </p>
      </div>
    );
  };
  
  export default Error;