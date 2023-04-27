import React, { useEffect, useState } from 'react';
import Wine from './components/Wine';
import FlexLayout from './layout/FlexLayout';
import MoveTop from './components/MoveTop';
import { baseUrl } from './type/const.ts';
import { Loading } from './components/Loading';
import styled from 'styled-components';

const Main = () => {
  const limit = 32;
  //idea, cardsize를 계산해서 limit를 바꾼다면?
  //칸에 맞게 size 잡고 한 줄 뒤는 로딩 컴포넌트 뿌려주기
  const [page, setPage] = useState(1);
  const [wineData, setWineData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [hasNext, setHasNext] = useState(true);

  let lastPage = 0;
  const fetchData = async () => {
    //임의로 준 로딩 시간 및 json-server pagination 이용
    setTimeout(async () => {
      const res = await fetch(`${baseUrl}/wines?_page=${page}&_limit=${limit}`);
      if (!res.ok) {
        console.log('fetching failed');
        return;
      }
      const parser = parseLinkHeader(res.headers.get('Link'));
      lastPage = Number(parser['last'].slice(parser['last'].search('_page=') + 6, parser['last'].search('_page=') + 7));

      const data = await res.json();

      setWineData(wineData.concat(data));
      setIsFetching(false);
      setPage(page + 1);
      if (page === lastPage) setHasNext(false);
    }, 1000);
  };

  useEffect(() => {
    //맨처음에 데이터를 뿌려주기 위함
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

      if (scrollTop + clientHeight >= scrollHeight) {
        setIsFetching(true);
      }
    };
    setIsFetching(true);
    window.addEventListener('scroll', handleScroll);
    // window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isFetching && hasNext) fetchData();
    else if (!hasNext) setIsFetching(false);
  }, [isFetching]);

  return (
    <Wrapper>
      <Title className="main-title">🍾WINE🍾</Title>
      <FlexLayout>
        {wineData !== undefined
          ? wineData.map((wine, idx) => {
              return <Wine key={idx} data={wine} />;
            })
          : ''}
        {isFetching && <Loading size={4} />}
      </FlexLayout>

      <MoveTop />
    </Wrapper>
  );
};

export default Main;

function parseLinkHeader(linkHeader) {
  return Object.fromEntries(
    linkHeader
      .split(', ')
      .map((header) => header.split('; '))
      .map((header) => [header[1].replace(/"/g, '').replace('rel=', ''), header[0].slice(1, -1)]),
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-family: 'Sigmar', cursive;
  letter-spacing: 10px;
`;
