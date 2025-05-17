import errorImage from '../assets/404.svg';

export default function ErrorPage() {
    return (
        <div className="relative flex flex-col justify-center items-center h-screen text-center bg-gray-800">
            <div className="relative z-10">
                <img
                    className="h-80 w-80 object-contain md:object-cover mx-auto"
                    src={errorImage}
                    alt="Error Image"
                    loading='lazy'
                    title='https://storyset.com/web | Web illustrations by Storyset'
                />
                <h1 className="text-3xl text-white font-semibold">Oops! Something went wrong.</h1>
                <p className="mt-2 text-white mb-8">The page you are looking for does not exist.</p>
                
                <a 
                    href='/'
                    className="mt-[150px] px-8 py-3 text-white montserrat-ack-error rounded-lg shadow-md hover:bg-purple-800 bg-gray-900 transition duration-300"
                >
                    Back to Home
                </a>
            </div>
        </div>
    );
}
