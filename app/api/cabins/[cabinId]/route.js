import { getBookedDatesByCabinId, getCabin } from '@/app/_lib/data-service';

export async function GET(request, { params }) {
  //? in terminal
  // console.log(request);
  // console.log(params);
  //return Response.json({ test: 'test' });
  const { cabinId } = params;
  try {
    const [cabin, bookedDate] = await Promise.all([
      getCabin(cabinId),
      getBookedDatesByCabinId(cabinId),
    ]);
    return Response.json({ cabin, bookedDate });
  } catch (error) {
    console.log(error.message);
    return Response.json({ error: 'Cabin Not Found' });
  }
}

//? we need Try Cache because here we need some error handling,because the error boundaries that we set up for the Next.js app are of course not going to work here.
