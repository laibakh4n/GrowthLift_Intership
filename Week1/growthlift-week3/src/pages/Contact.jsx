function Contact() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold text-green-500 mb-4">Contact</h1>
      <div className="flex flex-col gap-4 max-w-md">
        <input type="text" placeholder="Name" className="bg-gray-800 border border-gray-700 rounded-lg p-3 text-white" />
        <input type="email" placeholder="Email" className="bg-gray-800 border border-gray-700 rounded-lg p-3 text-white" />
        <textarea placeholder="Message" className="bg-gray-800 border border-gray-700 rounded-lg p-3 text-white" rows="4"></textarea>
      </div>
    </div>
  );
}

export default Contact;