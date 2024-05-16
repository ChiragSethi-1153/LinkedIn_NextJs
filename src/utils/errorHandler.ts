export const returnErrorResponse = (
    data: any,
    status: number,
    statusText: string
  ) => {
    return new Response(data ? JSON.stringify(data) : null, {
      status: status,
      statusText: statusText,
    });
  };