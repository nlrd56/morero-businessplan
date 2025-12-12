import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { motion } from "motion/react";
import { Eye, EyeOff } from "lucide-react";
import moreroLogo from "../../assets/logo.svg";
import { useNavigate } from "react-router";

const schema = yup
  .object({
    password: yup.string().required("Password is required"),
  })
  .required();

interface PasswordFormData {
  password: string;
}

interface PasswordInputProps {
  onLogin: (password: string) => Promise<boolean>;
  isLoading?: boolean;
}

export default function PasswordInput({
  onLogin,
  isLoading = false,
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PasswordFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: PasswordFormData) => {
    setError("");
    setIsSubmitting(true);
    try {
      const success = await onLogin(data.password);
      if (!success) {
        setError("Incorrect password. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error("Login error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    navigate("/", { replace: true });
  }, [navigate]);

  return (
    <div
      className="flex min-h-screen items-center justify-center p-4"
      style={{ backgroundColor: "#0D0D0D" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md space-y-8"
      >
        <div className="text-center">
          <img src={moreroLogo} alt="Morero Logo" className="h-20 mx-auto" />
          <h2 className="mt-6 text-white font-sofia-sans-extra-condensed font-bold italic text-4xl mb-2">
            Business Plan
          </h2>
          <p className="mt-2 text-sm text-gray-300">
            Enter the password to access this page
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <div className="relative mt-1">
              <Input
                {...register("password")}
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="******"
                className="pr-10 text-white placeholder:text-gray-400 bg-transparent border-white border outline-none shadow-none focus:border-[#D65D12] focus:text-[#D65D12]"
                disabled={isLoading || isSubmitting}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                disabled={isLoading || isSubmitting}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1 text-sm text-red-400">
                {errors.password.message}
              </p>
            )}
            {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
          </div>

          <Button
            type="submit"
            className="w-full text-white border border-white bg-transparent hover:border-[#D65D12] hover:text-[#D65D12] focus:bg-[#D65D12] focus:text-white transition-colors"
            disabled={isLoading || isSubmitting}
          >
            {isLoading || isSubmitting ? "Checking..." : "Access Page"}
          </Button>
        </form>
      </motion.div>
    </div>
  );
}
