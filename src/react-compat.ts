// Polyfill for React 19.2+ compatibility with MUI 7 / ui-kit
// React 19.2 removed __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
// MUI and some libraries still access it during SSR
import React from "react";

try {
  const _React = React as Record<string, unknown>;
  if (!_React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) {
    _React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = {
      ReactCurrentOwner: { current: null },
      ReactCurrentDispatcher: { current: null },
      ReactCurrentBatchConfig: { transition: null },
    };
  }
} catch {
  // React object may be frozen in newer versions
}
