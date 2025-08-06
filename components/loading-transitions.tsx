"use client"

import { useEffect } from "react"

export function LoadingTransitions() {
  useEffect(() => {
    // Add CSS for smooth page transitions
    const style = document.createElement("style")
    style.textContent = `
      .page-enter {
        opacity: 0;
        transform: translateX(100px) scale(0.95);
      }
      
      .page-enter-active {
        opacity: 1;
        transform: translateX(0) scale(1);
        transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .page-exit {
        opacity: 1;
        transform: translateX(0) scale(1);
      }
      
      .page-exit-active {
        opacity: 0;
        transform: translateX(-100px) scale(0.95);
        transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
      }

      .fade-in {
        animation: fadeIn 0.6s ease-out forwards;
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .slide-up {
        animation: slideUp 0.8s ease-out forwards;
      }

      @keyframes slideUp {
        from {
          opacity: 0;
          transform: translateY(50px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .scale-in {
        animation: scaleIn 0.5s ease-out forwards;
      }

      @keyframes scaleIn {
        from {
          opacity: 0;
          transform: scale(0.8);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }
    `
    document.head.appendChild(style)

    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style)
      }
    }
  }, [])

  return null
}
