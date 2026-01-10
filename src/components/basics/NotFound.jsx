import { Link } from "react-router-dom";
import { FiAlertCircle } from "react-icons/fi";

const NotFound = () => {
  return (
      <div className="min-h-screen flex items-center justify-center bg-background text-text px-6">
        <div className="max-w-xl text-center space-y-6">

          {/* Illustration */}
          <div className="flex justify-center items-center gap-6">
            {/* Little app window */}
            <div className="relative w-16 h-14 rounded-lg border border-border bg-surface shadow-sm flex items-center justify-center">
              <FiAlertCircle className="text-warning text-xl" />
            </div>

            {/* Speech bubble */}
            <div className="relative bg-accent text-inverted rounded-full px-10 py-6 text-5xl font-light">
              404
              <span className="absolute left-3 bottom-[-8px] w-4 h-4 bg-accent rotate-45"></span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl tracking-wide text-secondary">
            PAGE NOT FOUND
          </h1>

          {/* Description */}
          <p className="text-muted leading-relaxed">
            We looked everywhere for this page.
            <br />
            Are you sure the website URL is correct?
            <br />
            If the address looks right, it might just be temporary — try again in a bit.
          </p>

          {/* Action */}
          <div className="pt-4">
            <Link
                to="/"
                className="px-6 py-3 rounded-full"
                style={{ backgroundColor: "rgb(37 99 235)", color: "white" }}
            >
              Go Back Home
            </Link>

          </div>

        </div>
      </div>
  );
};

export default NotFound;
