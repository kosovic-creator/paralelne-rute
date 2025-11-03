type LayoutProps = {
  children: React.ReactNode;    // glavni sadržaj (default slot)
  analytics?: React.ReactNode;  // parallel route slot @analytics
  chat?: React.ReactNode;       // parallel route slot @chat
  notifications?: React.ReactNode; // parallel route slot @notifications
};

export default function Layout({
  children,
  analytics,
  chat,
  notifications,
}: LayoutProps) {
  return (
    <html lang="sr">
      <body className="bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          <header className="bg-white shadow-sm rounded-lg p-6 mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Header sajta</h1>
          </header>

          <main className="mb-8">
            {/* Glavni sadržaj */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              {children}
            </div>
          </main>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div>
              {/* Analytics slot */}
              {analytics}
            </div>

            <div>
              {/* Chat slot */}
              {chat}
            </div>

            <div>
              {/* Notifications slot */}
              {notifications}
            </div>
          </div>

          <footer className="bg-white shadow-sm rounded-lg p-6 text-center">
            <p className="text-gray-600">Footer sajta</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
