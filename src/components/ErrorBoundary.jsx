import React from "react";
import errorImage from '../assets/404.svg';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Caught by ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="relative flex flex-col justify-center items-center h-screen text-center bg-gray-800">
          <div className="relative z-10">
            <img
              className="h-80 w-80 object-contain md:object-cover mx-auto"
              src={errorImage}
              alt="JavaScript Error"
              loading="lazy"
              title="https://storyset.com/web | Web illustrations by Storyset"
            />
            <h1 className="text-3xl text-white font-semibold">Something went wrong.</h1>
            <p className="mt-2 text-white mb-8">
              A JavaScript error occurred while rendering this page.
            </p>

            <a
              href="/"
              className="mt-[150px] px-8 py-3 text-white montserrat-ack-error rounded-lg shadow-md hover:bg-purple-800 bg-gray-900 transition duration-300"
            >
              Back to Home
            </a>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
