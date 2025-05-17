const CliPaymentNotLiveYet = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-40">
      <div className="relative rounded-lg overflow-hidden">
          <div className="flex flex-col items-center justify-center">
            <div className="px-8 py-4 bg-gray-800 rounded-lg border border-teal-500 shadow-lg text-center max-w-md">
              <h3 className="text-2xl font-bold text-teal-400 mb-2">Coming Soon!</h3>
              <p className="text-gray-300 mb-4">
                CLI Payment System is currently under development and will be launching soon.
              </p>
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="h-1 w-1 bg-teal-500 rounded-full animate-pulse"></div>
                <div className="h-1 w-1 bg-teal-500 rounded-full animate-pulse delay-100"></div>
                <div className="h-1 w-1 bg-teal-500 rounded-full animate-pulse delay-200"></div>
              </div>
              <div className="flex flex-wrap gap-3 justify-center">
                <div className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full">Secure Transactions</div>
                <div className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full">Multiple Payment Methods</div>
                <div className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full">Easy Integration</div>
                <div className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full">Developer-Friendly</div>
              </div>
            </div>
          </div>
      </div>
    </div>  
  );
};

export default CliPaymentNotLiveYet;