import classNames from "classnames";
import { FC, useState, useEffect } from "react";

interface IProgressBarProps {
  duration: number;
  isFill?: boolean;
  disabled?: boolean;
  classname?: string;
  onFinish?: () => void
}

const ProgressBar: FC<IProgressBarProps> = ({
  duration,
  isFill,
  disabled,
  classname,
  onFinish
}) => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrameId: number | null = null;
    if (!isFill && !disabled) {
      const animate = (currentTime: number) => {
        if (!startTime) {
          startTime = currentTime;
        }

        const elapsedTime = currentTime - startTime;
        const progressPercentage = Math.min(1, elapsedTime / duration);

        setProgress(progressPercentage);

        if (progressPercentage < 1) {
          animationFrameId = requestAnimationFrame(animate);
        } else {
            onFinish?.();
        }
      };

      animationFrameId = requestAnimationFrame(animate);
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [duration, isFill, disabled]);

  const containerCn = classNames(classname, "h-[3px] rounded-lg bg-gray-700");

  const progressBarStyles: React.CSSProperties = {
    width: isFill ? "100%" : `${progress * 100}%`,
    height: "100%",
    backgroundColor: "#fff",
  };

  return (
    <div className={containerCn}>
      {!disabled ? <div style={progressBarStyles} /> : null}
    </div>
  );
};

export default ProgressBar;
