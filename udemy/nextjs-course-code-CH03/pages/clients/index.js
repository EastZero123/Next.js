import Link from "next/link";

function ClientsPage() {
  const clients = [
    {
      id: "max",
      name: "Maximilian",
    },
    {
      id: "manu",
      name: "Manuel",
    },
  ];

  return (
    <div>
      <h1>Clients Page</h1>
      <ul>
        {clients.map((client) => (
          <li>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientsPage;
