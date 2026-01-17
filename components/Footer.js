"use client";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-6">
      <div className="max-w-6xl mx-auto px-4">
        {/* Copyright */}
        <div className="text-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Dr. Dinesh R.S. All Rights Reserved.
          </p>
          <p className="mt-1">
            Web Developer —{" "}
            <a
              href="https://www.web-developer-kp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-700 font-medium"
            >
              Creative Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;