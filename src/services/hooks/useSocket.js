function useSocket(socket, data) {
  const [response, setResponse] = useState(null);
  const [isPerforming, setIsPerforming] = useState(true);

  useEffect(() => {
    const handleResponse = (d) => {
      setResponse(d);
      setIsPerforming(false);
    };

    server.on(socket, handleResponse);
    server.emit(socket, data);

    return () => {
      server.off(socket, handleResponse);
    };
  }, [socket, data]);

  return [response, isPerforming];
}

export default useSocket;
