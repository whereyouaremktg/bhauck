"use client"

import { useEffect } from "react"

export default function BookingWidget() {
  useEffect(() => {
    // Load the SimplePractice widget script
    const script = document.createElement("script")
    script.src = "https://widget-cdn.simplepractice.com/assets/integration-1.0.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup script on unmount
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="text-center">
      <style jsx>{`
        .spwidget-button-wrapper {
          text-align: center;
        }
        .spwidget-button {
          display: inline-block;
          padding: 16px 32px;
          color: #000 !important;
          background: #E4D096;
          border: 0;
          border-radius: 0;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          transition: opacity 0.2s ease;
        }
        .spwidget-button:hover {
          background: #E4D096;
          opacity: 0.8;
        }
        .spwidget-button:active {
          color: rgba(0, 0, 0, 0.75) !important;
          box-shadow: none;
        }
      `}</style>

      <div className="spwidget-button-wrapper">
        <a
          href="https://revivebeautyandwellness.clientsecure.me"
          className="spwidget-button"
          data-spwidget-scope-id="f2ba7e06-9f14-465c-9252-3cc5af73185f"
          data-spwidget-scope-uri="revivebeautyandwellness"
          data-spwidget-application-id="7c72cb9f9a9b913654bb89d6c7b4e71a77911b30192051da35384b4d0c6d505b"
          data-spwidget-scope-global
          data-spwidget-autobind
        >
          Request Appointment
        </a>
      </div>
    </div>
  )
}
