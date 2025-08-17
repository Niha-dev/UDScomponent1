import React, { useState } from "react";
import {InputField} from "./components/InputField";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("outlined");
  const [size, setSize] = useState("medium");
  const [theme, setTheme] = useState("light");

  const [disabled, setDisabled] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [clearable, setClearable] = useState(true);
  

  return (
    <div
      className={`min-h-screen flex items-center justify-center ${
        theme === "white" ? "bg-gray-900 text-white" : "bg-white-100 text-black"
      }`}
    >
      {/* Shrink and center form */}
      <div className="w-full max-w-md bg-white dark:bg-white-800 p-6 rounded-2xl shadow-md">
        <div className="space-y-6">
          {/* Username */}
          <InputField
            label="Username"
            placeholder="Enter your username"
            helperText="This is your login ID"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            clearable={clearable}
            disabled={disabled}
            invalid={invalid}
            loading={loading}
            size={size as "sm" | "md" | "lg"}
            variant={variant as "filled" | "outlined" | "ghost"}
          />

          {/* Password */}
          <InputField
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            errorMessage={password === "" ? "Password is required" : undefined}
            invalid={password === ""}
            passwordToggle
            disabled={disabled}
            loading={loading}
            size={size as "sm" | "md" | "lg"}
            variant={variant as "filled" | "outlined" | "ghost"}
          />

          {/* Controls */}
          <div className="space-y-4">
            <div>
              <label className="block mb-1">Variant</label>
              <select
                value={variant}
                onChange={(e) => setVariant(e.target.value)}
                className="w-full border p-2 rounded"
              >
                <option value="outlined">Outlined</option>
                <option value="filled">Filled</option>
                <option value="ghost">Ghost</option>
              </select>
            </div>

            <div>
              <label className="block mb-1">Size</label>
              <select
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className="w-full border p-2 rounded"
              >
                <option value="sm">Small</option>
                <option value="md">Medium</option>
                <option value="lg">Large</option>
              </select>
            </div>

            <div>
              <label className="block mb-1">Theme</label>
              <select
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                className="w-full border p-2 rounded"
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
            </div>

            {/* Checkboxes */}
            <div className="flex gap-4 flex-wrap">
              <label>
                <input
                  type="checkbox"
                  checked={disabled}
                  onChange={(e) => setDisabled(e.target.checked)}
                />{" "}
                Disabled
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={invalid}
                  onChange={(e) => setInvalid(e.target.checked)}
                />{" "}
                Invalid
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={loading}
                  onChange={(e) => setLoading(e.target.checked)}
                />{" "}
                Loading
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={clearable}
                  onChange={(e) => setClearable(e.target.checked)}
                />{" "}
                Clearable
              </label>
            </div>
            <button
      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
    >
      Login
    </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
