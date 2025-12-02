export default function AboutUs() {
  return (
    <section className="py-16 bg-slate-100 text-slate-800">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-blue-700">
          About Us
        </h2>

        <p className="text-lg leading-relaxed text-center mb-10 max-w-3xl mx-auto">
          At <span className="font-semibold">Pet Care Winter</span>, our mission
          is to help pets stay <strong>warm, healthy, and safe</strong> during
          the cold winter months. We built this platform to provide reliable
          winter care tips, expert guidance, and essential seasonal services for
          your furry friends.
        </p>

        {/* What We Do Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          <div className="bg-white shadow-md p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              Winter Care Guidance
            </h3>
            <p className="text-slate-600">
              Learn how to protect your pets from cold weather, frostbite, dry
              skin, and other winter-related challenges.
            </p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              Expert Vet Support
            </h3>
            <p className="text-slate-600">
              Get insights and advice from certified veterinarians with years of
              winter pet care expertise.
            </p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              Seasonal Services
            </h3>
            <p className="text-slate-600">
              Explore our winter services—from coat fittings to grooming
              packages and warm bedding solutions.
            </p>
          </div>
        </div>

        {/* Why We Built This */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-4 text-blue-700">
            Why We Built This Project
          </h3>
          <p className="text-lg text-center max-w-4xl mx-auto text-slate-700 leading-relaxed">
            Many pet owners struggle during winter with keeping pets warm,
            feeding them properly, and avoiding cold-related health issues. Pet
            Care Winter was created to solve these challenges through education,
            expert guidance, and modern technology.
          </p>
        </div>

        {/* Vision */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4 text-blue-700">Our Vision</h3>
          <p className="text-lg max-w-4xl mx-auto text-slate-700 leading-relaxed">
            To become the most trusted online companion for pet owners during
            winter—offering reliable information, helpful services, and a smooth
            digital experience that improves the quality of life for pets
            everywhere.
          </p>
        </div>

        {/* Commitment */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-6 text-blue-700">
            Our Commitment
          </h3>
          <ul className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-slate-700">
            <li className="bg-white shadow p-4 rounded-xl">
              ✔ Promoting responsible and informed pet care
            </li>
            <li className="bg-white shadow p-4 rounded-xl">
              ✔ Delivering accurate, high-quality winter care information
            </li>
            <li className="bg-white shadow p-4 rounded-xl">
              ✔ Keeping the platform fast, secure, and user-friendly
            </li>
            <li className="bg-white shadow p-4 rounded-xl">
              ✔ Respecting and protecting user privacy
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
