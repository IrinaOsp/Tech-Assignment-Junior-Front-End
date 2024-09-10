const SkeletonRow = () => {
  return (
    <tr className="animate-pulse">
      <td className="p-2">
        <div className="h-4 bg-gray-300 rounded"></div>
      </td>
      <td className="p-2">
        <div className="h-4 bg-gray-300 rounded"></div>
      </td>
      <td className="p-2">
        <div className="h-4 bg-gray-300 rounded"></div>
      </td>
      <td className="p-2">
        <div className="h-4 bg-gray-300 rounded"></div>
      </td>
    </tr>
  );
};

export default SkeletonRow;
