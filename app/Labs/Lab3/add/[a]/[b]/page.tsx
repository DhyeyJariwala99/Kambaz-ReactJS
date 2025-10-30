export default async function AddPathParameters({
  params,
}: {
  params: Promise<{ a: string; b: string }>;
}) {
  const { a, b } = await params;
  const numA = parseInt(a);
  const numB = parseInt(b);

  return (
    <div id="wd-add">
      <h4>Add Path Parameters</h4>
      {numA} + {numB} = {numA + numB}
    </div>
  );
}