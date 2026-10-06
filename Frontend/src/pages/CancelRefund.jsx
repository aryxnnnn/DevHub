import React from "react";

function CancelRefund() {
  return (
    <div className="min-h-screen bg-white px-6 py-12 text-gray-800">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Cancellation & Refund Policy
          </h1>
          <p className="mt-3 text-sm text-gray-500">
            Last updated: October 6, 2026
          </p>
        </div>

        {/* Introduction */}
        <section className="space-y-4">
          <p className="leading-7">
            This Cancellation & Refund Policy explains the terms applicable to
            subscriptions and payments made through DevHub. Please read this
            policy carefully before purchasing any subscription.
          </p>

          <p className="leading-7">
            By completing a subscription purchase, you acknowledge that you have
            reviewed the plan, its features, pricing, and duration and agree to
            the terms described below.
          </p>
        </section>

        {/* No Refund - Highlighted */}
        <section className="mt-10 rounded-xl border-2 border-red-200 bg-red-50 p-6">
          <h2 className="mb-3 text-2xl font-bold text-red-700">
            No Refunds After Purchase
          </h2>

          <p className="font-semibold leading-7 text-gray-900">
            All subscription purchases made through DevHub are final and
            non-refundable.
          </p>

          <p className="mt-4 leading-7 text-gray-800">
            Users are expected to carefully review the subscription plan,
            pricing, features, and duration before completing a purchase. Once a
            subscription has been successfully purchased, we do not provide
            refunds, cancellations, or partial refunds for unused subscription
            time.
          </p>

          <p className="mt-4 leading-7 text-gray-800">
            This includes situations where a user changes their mind, does not
            use the subscription, or decides that they no longer require the
            service after completing the purchase.
          </p>
        </section>

        {/* Before Purchase */}
        <section className="mt-10">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            1. Please Review Before Purchasing
          </h2>

          <p className="leading-7">
            Before purchasing a subscription, please make sure that you have
            selected the correct plan and understand the services and features
            included with it.
          </p>

          <p className="mt-4 leading-7">
            If you are unsure about a subscription or need clarification about
            its features, we recommend contacting us before making the purchase.
          </p>
        </section>

        {/* Payment Issues */}
        <section className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-6">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            2. Payment Failed or Got Stuck
          </h2>

          <p className="leading-7">
            A payment may occasionally appear to be stuck, fail, or show an
            unexpected status due to technical or payment-provider issues.
          </p>

          <p className="mt-4 leading-7">
            If your payment was debited but your subscription was not activated,
            please contact our support team. We will investigate the payment
            status and assist you in resolving the issue.
          </p>

          <p className="mt-4 font-medium leading-7 text-gray-900">
            Payment-related issues will be investigated and resolved where
            appropriate. This does not change our no-refund policy for
            successfully completed subscription purchases.
          </p>
        </section>

        {/* Cancellation */}
        <section className="mt-10">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            3. Subscription Cancellation
          </h2>

          <p className="leading-7">
            You may choose to stop using your subscription at any time. However,
            cancelling or stopping the use of a subscription does not make the
            completed purchase eligible for a refund.
          </p>

          <p className="mt-4 leading-7">
            Any remaining subscription period will continue according to the
            terms of the purchased plan unless otherwise stated at the time of
            purchase.
          </p>
        </section>

        {/* Partial Refund */}
        <section className="mt-10">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            4. Partial Refunds
          </h2>

          <p className="leading-7">
            DevHub does not provide partial refunds for unused days, unused
            features, or remaining time on a subscription after a successful
            purchase.
          </p>
        </section>

        {/* Duplicate Payments */}
        <section className="mt-10">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            5. Duplicate or Incorrect Charges
          </h2>

          <p className="leading-7">
            If you believe you have been charged more than once for the same
            subscription or have been charged incorrectly, please contact us
            with the relevant payment details. We will review the transaction
            and assist in resolving verified payment errors.
          </p>
        </section>

        {/* Support */}
        <section className="mt-10 border-t border-gray-200 pt-10">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            6. Contact Support
          </h2>

          <p className="leading-7">
            If you experience a payment problem, your payment is stuck, or your
            subscription was not activated after a successful payment, please
            contact our support team.
          </p>

          <p className="mt-4 font-medium text-gray-900">support@devhub.com</p>

          <p className="mt-3 text-sm leading-6 text-gray-500">
            When contacting support about a payment issue, please provide
            relevant transaction details so that we can investigate the issue
            efficiently.
          </p>
        </section>

        {/* Important Notice */}
        <section className="mt-10 rounded-lg border border-gray-200 bg-gray-50 p-5">
          <p className="text-sm leading-6 text-gray-600">
            <span className="font-semibold text-gray-900">Important:</span>{" "}
            Please make sure you are purchasing the subscription you actually
            want before completing payment. Successful subscription purchases
            are non-refundable.
          </p>
        </section>

        {/* Footer */}
        <div className="mt-12 border-t border-gray-200 pt-6 text-sm text-gray-500">
          © 2026 DevHub. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default CancelRefund;
