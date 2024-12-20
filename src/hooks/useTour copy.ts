// // import { useEffect, useState, useCallback } from "react";
// // import { driver, DriveStep } from "driver.js";
// // import "driver.js/dist/driver.css";
// // import { useRouter } from "next/navigation";

// // export interface EnhancedDriveStep extends Omit<DriveStep, "popover"> {
// //   popover: DriveStep["popover"] & {
// //     waitForElement?: boolean;
// //   };
// //   route?: string;
// //   clickable?: boolean;
// // }

// // export const useTour = (
// //   steps: EnhancedDriveStep[],
// //   initialDelay: number = 500
// // ) => {
// //   const [driverObj, setDriverObj] = useState<ReturnType<typeof driver> | null>(
// //     null
// //   );
// //   const [currentStepIndex, setCurrentStepIndex] = useState(0);
// //   const router = useRouter();

// //   const initializeDriver = useCallback(() => {
// //     const driverInstance = driver({
// //       showProgress: true,
// //       steps: steps.map((step) => ({
// //         ...step,
// //         popover: {
// //           ...step.popover,
// //           showButtons: ["close"],
// //         },
// //       })),
// //     });
// //     setDriverObj(driverInstance);
// //   }, [steps]);

// //   useEffect(() => {
// //     const timer = setTimeout(initializeDriver, initialDelay);
// //     return () => clearTimeout(timer);
// //   }, [initializeDriver, initialDelay]);

// //   const startTour = useCallback(() => {
// //     if (driverObj) {
// //       driverObj.drive(0);
// //       setCurrentStepIndex(0);
// //     }
// //   }, [driverObj]);

// //   const nextStep = useCallback(() => {
// //     if (driverObj && currentStepIndex < steps.length - 1) {
// //       const nextIndex = currentStepIndex + 1;
// //       const nextStep = steps[nextIndex];

// //       const proceedToNextStep = () => {
// //         setCurrentStepIndex(nextIndex);
// //         driverObj.drive(nextIndex);
// //       };

// //       if (nextStep.route && nextStep.route !== window.location.pathname) {
// //         router.push(nextStep.route);
// //         // Wait for route change before proceeding
// //         setTimeout(() => {
// //           if (nextStep.popover.waitForElement) {
// //             if (typeof nextStep.element === "string") {
// //               waitForElement(nextStep.element, proceedToNextStep);
// //             }
// //           } else {
// //             proceedToNextStep();
// //           }
// //         }, 500);
// //       } else if (nextStep.popover.waitForElement) {
// //         if (typeof nextStep.element === "string") {
// //           waitForElement(nextStep.element, proceedToNextStep);
// //         }
// //       } else {
// //         proceedToNextStep();
// //       }
// //     }
// //   }, [driverObj, steps, currentStepIndex, router]);

// //   const waitForElement = (selector: string, callback: () => void) => {
// //     const checkElement = setInterval(() => {
// //       const element = document.querySelector(selector);
// //       if (element) {
// //         clearInterval(checkElement);
// //         callback();
// //       }
// //     }, 100);
// //   };

// //   useEffect(() => {
// //     const handleElementClick = (event: MouseEvent) => {
// //       const clickedElement = event.target as HTMLElement;
// //       const currentStep = steps[currentStepIndex];

// //       if (
// //         currentStep &&
// //         currentStep.clickable &&
// //         typeof currentStep.element === "string" &&
// //         clickedElement.closest(currentStep.element)
// //       ) {
// //         nextStep();
// //       }
// //     };

// //     document.addEventListener("click", handleElementClick);
// //     return () => document.removeEventListener("click", handleElementClick);
// //   }, [steps, currentStepIndex, nextStep]);

// //   return { startTour, currentStepIndex };
// // };



// // import { useEffect, useState, useCallback } from "react";
// // import { driver, DriveStep } from "driver.js";
// // import "driver.js/dist/driver.css";
// // import { useRouter } from "next/navigation";

// // export interface EnhancedDriveStep extends Omit<DriveStep, "popover"> {
// //   popover: DriveStep["popover"] & {
// //     waitForElement?: boolean;
// //     position?: "top" | "bottom" | "left" | "right" | "over";
// //   };
// //   route?: string;
// //   clickable?: boolean;
// // }

// // export const useTour = (
// //   steps: EnhancedDriveStep[],
// //   initialDelay: number = 500
// // ) => {
// //   const [driverObj, setDriverObj] = useState<ReturnType<typeof driver> | null>(
// //     null
// //   );
// //   const [currentStepIndex, setCurrentStepIndex] = useState(0);
// //   const router = useRouter();

// //   const initializeDriver = useCallback(() => {
// //     const driverInstance = driver({
// //       showProgress: true,
// //       steps: steps.map((step) => ({
// //         ...step,
// //         popover: {
// //           ...step.popover,
// //           showButtons: ["close"],
// //           position: step.popover.position || "bottom",
// //         },
// //       })),
// //     });
// //     setDriverObj(driverInstance);
// //   }, [steps]);

// //   useEffect(() => {
// //     const timer = setTimeout(initializeDriver, initialDelay);
// //     return () => clearTimeout(timer);
// //   }, [initializeDriver, initialDelay]);

// //   const startTour = useCallback(() => {
// //     if (driverObj) {
// //       driverObj.drive(0);
// //       setCurrentStepIndex(0);
// //     }
// //   }, [driverObj]);

// //   const nextStep = useCallback(() => {
// //     if (driverObj && currentStepIndex < steps.length - 1) {
// //       const nextIndex = currentStepIndex + 1;
// //       const nextStep = steps[nextIndex];

// //       const proceedToNextStep = () => {
// //         setCurrentStepIndex(nextIndex);
// //         driverObj.drive(nextIndex);
// //       };

// //       if (nextStep.route && nextStep.route !== window.location.pathname) {
// //         router.push(nextStep.route);
// //         // Wait for route change before proceeding
// //         setTimeout(() => {
// //           if (nextStep.popover.waitForElement) {
// //             if (typeof nextStep.element === "string") {
// //               waitForElement(nextStep.element, proceedToNextStep);
// //             }
// //           } else {
// //             proceedToNextStep();
// //           }
// //         }, 500);
// //       } else if (nextStep.popover.waitForElement) {
// //         if (typeof nextStep.element === "string") {
// //           waitForElement(nextStep.element, proceedToNextStep);
// //         }
// //       } else {
// //         proceedToNextStep();
// //       }
// //     }
// //   }, [driverObj, steps, currentStepIndex, router]);

// //   const waitForElement = (selector: string, callback: () => void) => {
// //     const checkElement = setInterval(() => {
// //       const element = document.querySelector(selector);
// //       if (element) {
// //         clearInterval(checkElement);
// //         callback();
// //       }
// //     }, 100);
// //   };

// //   useEffect(() => {
// //     const handleElementClick = (event: MouseEvent) => {
// //       const clickedElement = event.target as HTMLElement;
// //       const currentStep = steps[currentStepIndex];

// //       if (
// //         currentStep &&
// //         currentStep.clickable &&
// //         typeof currentStep.element === "string" &&
// //         clickedElement.closest(currentStep.element)
// //       ) {
// //         nextStep();
// //       }
// //     };

// //     document.addEventListener("click", handleElementClick);
// //     return () => document.removeEventListener("click", handleElementClick);
// //   }, [steps, currentStepIndex, nextStep]);

// //   return { startTour, currentStepIndex };
// // };



import { useEffect, useState, useCallback } from "react";
import { driver, DriveStep } from "driver.js";
import "driver.js/dist/driver.css";
import { useRouter, usePathname } from "next/navigation";

export interface EnhancedDriveStep extends Omit<DriveStep, "popover"> {
  popover: DriveStep["popover"] & {
    waitForElement?: boolean;
    position?: "top" | "bottom" | "left" | "right" | "over";
  };
  route?: string;
  clickable?: boolean;
  waitForFormSubmission?: boolean;
  formSelector?: string;
}

export const useTour = (
  steps: EnhancedDriveStep[],
  initialDelay: number = 500
) => {
  const [driverObj, setDriverObj] = useState<ReturnType<typeof driver> | null>(
    null
  );
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isTourStarted, setIsTourStarted] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const initializeDriver = useCallback(() => {
    const driverInstance = driver({
      showProgress: true,
      allowClose: false,
      steps: steps.map((step) => ({
        ...step,
        popover: {
          ...step.popover,
          showButtons: [],
          position: step.popover.position || "bottom",
        },
      })),
    });
    setDriverObj(driverInstance);
  }, [steps]);

  useEffect(() => {
    const timer = setTimeout(initializeDriver, initialDelay);
    return () => clearTimeout(timer);
  }, [initializeDriver, initialDelay]);

  const startTour = useCallback(() => {
    if (driverObj) {
      driverObj.drive(0);
      setCurrentStepIndex(0);
      setIsTourStarted(true);
    }
  }, [driverObj]);

  const nextStep = useCallback(() => {
    if (driverObj && currentStepIndex < steps.length - 1) {
      const nextIndex = currentStepIndex + 1;
      const nextStep = steps[nextIndex];

      const proceedToNextStep = () => {
        setCurrentStepIndex(nextIndex);
        driverObj.drive(nextIndex);
      };

      if (nextStep.route && nextStep.route !== pathname) {
        router.push(nextStep.route);
      } else {
        proceedToNextStep();
      }
    } else {
      setIsTourStarted(false);
    }
  }, [driverObj, steps, currentStepIndex, router, pathname]);

  useEffect(() => {
    if (isTourStarted) {
      const currentStep = steps[currentStepIndex];
      if (currentStep.route === pathname) {
        const timer = setTimeout(() => {
          if (
            currentStep.popover.waitForElement &&
            typeof currentStep.element === "string"
          ) {
            waitForElement(currentStep.element, () =>
              driverObj?.drive(currentStepIndex)
            );
          } else {
            driverObj?.drive(currentStepIndex);
          }
        }, 500);
        return () => clearTimeout(timer);
      }
    }
  }, [isTourStarted, currentStepIndex, pathname, steps, driverObj]);

  const waitForElement = (selector: string, callback: () => void) => {
    const checkElement = setInterval(() => {
      const element = document.querySelector(selector);
      if (element) {
        clearInterval(checkElement);
        callback();
      }
    }, 100);
  };

  useEffect(() => {
    const handleElementClick = (event: MouseEvent) => {
      const clickedElement = event.target as HTMLElement;
      const currentStep = steps[currentStepIndex];

      if (
        currentStep &&
        currentStep.clickable &&
        typeof currentStep.element === "string" &&
        clickedElement.closest(currentStep.element)
      ) {
        nextStep();
      }
    };

    if (isTourStarted) {
      document.addEventListener("click", handleElementClick);
      return () => document.removeEventListener("click", handleElementClick);
    }
  }, [steps, currentStepIndex, nextStep, isTourStarted]);

  useEffect(() => {
    const currentStep = steps[currentStepIndex];
    if (
      isTourStarted &&
      currentStep &&
      currentStep.waitForFormSubmission &&
      currentStep.formSelector
    ) {
      const form = document.querySelector(
        currentStep.formSelector
      ) as HTMLFormElement;
      if (form) {
        const handleSubmit = (event: Event) => {
          event.preventDefault();
          nextStep();
        };
        form.addEventListener("submit", handleSubmit);
        return () => form.removeEventListener("submit", handleSubmit);
      }
    }
  }, [steps, currentStepIndex, nextStep, isTourStarted]);

  return { startTour, currentStepIndex, isTourStarted, nextStep };
};

