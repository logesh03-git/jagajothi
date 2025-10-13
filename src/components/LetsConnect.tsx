export default function LetsConnect() {
  return (
    <section id="contact" className="w-full py-16 px-6 text-center ">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Let’s Connect
      </h2>
      <p className="text-gray-300 mb-8">
        Drop a message, let’s start something great
      </p>

      {/* Input + Button */}
      <div className="flex justify-center gap-4 max-w-lg mx-auto">
        <input
          type="email"
          placeholder="Enter Your Email"
          className="flex-1 px-4 py-3 rounded-lg text-black bg-[#fff] focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <button className="bg-orange-500 text-white font-medium px-6 py-3 rounded-lg hover:bg-orange-600 transition">
          Contact Me
        </button>
      </div>
    </section>
  );
}
