type LayoutProps = {
  children: React.ReactNode;
  analytics?: React.ReactNode;
  chat?: React.ReactNode;
  notifications?: React.ReactNode;
};

export default function Layout({ children, analytics, chat, notifications }: LayoutProps) {
  return (
    <html lang="sr">
      <body className="bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          <header className="bg-white shadow-sm rounded-lg p-6 mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Header sajta</h1>
          </header>

          <main className="mb-8 ">
            <div className="bg-white rounded-lg shadow-sm p-6">{children}</div>
          </main>

          <div className="flex flex-row gap-6 mb-8">
            <div
              className="flex-1 border-4 border-blue-500 rounded-lg p-4 bg-white shadow-lg"
              style={{ border: '4px solid #3b82f6', padding: '16px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
            >
              {analytics}
            </div>
            <div
              className="flex-1 border-4 border-green-500 rounded-lg p-4 bg-white shadow-lg"
              style={{ border: '4px solid #10b981', padding: '16px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
            >
              {chat}
            </div>
            <div
              className="flex-1 border-4 border-purple-500 rounded-lg p-4 bg-white shadow-lg"
              style={{ border: '4px solid #8b5cf6', padding: '16px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
            >
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
