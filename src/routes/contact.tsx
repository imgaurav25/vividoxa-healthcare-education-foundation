export default function Contact() {
  const members = [
    {
      role: "Director",
      name: "Shivnandan Kumar",
      image: "/images/Director.webp",
    },
    {
      role: "Director",
      name: "Prema Kumari",
      image: "/images/Director2.webp",
    },
    {
      role: "Medical & Research Coordinator",
      name: "Ashutosh Sengar",
      image: "/images/medical__research_coordinator.webp",
    },
  ];

  return (
    <main class="min-h-screen bg-gray-50 px-6 py-16">
      <div class="mx-auto max-w-6xl">

        {/* Header */}
        <div class="mb-12 text-center">
          <h1 class="text-4xl font-bold text-gray-900">
            Contact Us
          </h1>

          <p class="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-500">
            Have a question or need more information? Reach out to us.
            We’ll be happy to assist you.
          </p>

          {/* Contact Information */}
          {/* Contact Information */}
          <div class="mx-auto mt-8 max-w-2xl">
            <div class="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200">
              <div class="grid divide-y divide-gray-200 sm:grid-cols-2 sm:divide-x sm:divide-y-0">

                {/* Phone */}
                <a
                  href="tel:7520646194"
                  class="group flex items-center gap-4 p-5 text-left transition hover:bg-gray-50"
                >
                  <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition group-hover:bg-gray-900 group-hover:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.8"
                      stroke="currentColor"
                      class="h-5 w-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-.? "
                      />
                    </svg>
                  </div>

                  <div class="min-w-0">
                    <p class="text-xs font-semibold uppercase tracking-wider text-gray-400">
                      Call Us
                    </p>
                    <p class="mt-1 text-sm font-semibold text-gray-900">
                      +91 75206 46194
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:vividoxafoundation@gmail.com"
                  class="group flex items-center gap-4 p-5 text-left transition hover:bg-gray-50"
                >
                  <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition group-hover:bg-gray-900 group-hover:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.8"
                      stroke="currentColor"
                      class="h-5 w-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21.75 6.75v10.5A2.25 2.25 0 0119.5 19.5h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0L12 13.5 2.25 6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25"
                      />
                    </svg>
                  </div>

                  <div class="min-w-0">
                    <p class="text-xs font-semibold uppercase tracking-wider text-gray-400">
                      Email Us
                    </p>
                    <p class="mt-1 truncate text-sm font-semibold text-gray-900">
                      vividoxafoundation@gmail.com
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Team Members */}
        <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => (
            <div class="overflow-hidden rounded-2xl bg-white text-center shadow-sm ring-1 ring-gray-200 transition hover:-translate-y-1 hover:shadow-lg">

              {/* Member Image */}
              <div class="flex justify-center bg-gray-100 p-6">
                <img
                  src={member.image}
                  alt={member.name}
                  class="h-40 w-40 rounded-full object-cover ring-4 ring-white shadow-md"
                />
              </div>

              {/* Member Details */}
              <div class="p-6">
                <h2 class="text-xl font-semibold text-gray-900">
                  {member.name}
                </h2>

                <p class="mt-2 text-sm font-medium text-blue-600">
                  {member.role}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
