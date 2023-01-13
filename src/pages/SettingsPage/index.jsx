import Header from "@components/Header";
import Settings from "@components/Settings";
import ErrorBoundary from "@components/ErrorBoundary";

function SettingsPage() {
  return (
    <ErrorBoundary>
      <Header />
      <Settings />
    </ErrorBoundary>
  );
}

export default SettingsPage;
