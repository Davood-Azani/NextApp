'use client';

import { useSearchParams, useRouter, usePathname } from 'next/navigation';

function Button({ filter, handleFilter, activeFilter, children }) {
  return (
    <button
      onClick={() => handleFilter(filter)}
      className={`px-5 py-2 hover:bg-primary-700 ${
        filter === activeFilter ? 'bg-primary-700 text-primary-50' : ''
      }`}
    >
      {children}
    </button>
  );
}

function Filter() {
  const searchParams = useSearchParams();
  //# allow us to programmatically navigate in next
  const router = useRouter();
  const pathname = usePathname();
  const activeFilter = searchParams.get('capacity') ?? 'all';
  function handleFilter(filter) {
    //# Simulating url
    const params = new URLSearchParams(searchParams);
    //? make url internally
    params.set('capacity', filter);
    //? navigate
    //? scroll false : dont allow to scroll to the top
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="border border-primary-800 flex">
      <Button
        activeFilter={activeFilter}
        handleFilter={handleFilter}
        filter="all"
      >
        {' '}
        All Cabins
      </Button>
      <Button
        activeFilter={activeFilter}
        handleFilter={handleFilter}
        filter="small"
      >
        {' '}
        1&mdash;3 guests
      </Button>
      <Button
        activeFilter={activeFilter}
        handleFilter={handleFilter}
        filter="medium"
      >
        {' '}
        4&mdash;7 guests
      </Button>
      <Button
        activeFilter={activeFilter}
        handleFilter={handleFilter}
        filter="large"
      >
        {' '}
        8&mdash;12 guests
      </Button>
    </div>
  );
}

export default Filter;
