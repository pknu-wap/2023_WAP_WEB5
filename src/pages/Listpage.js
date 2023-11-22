import styled from 'styled-components';
//파티의 list를 관리하는 js

const data = [
    { id: 1, title: '2023 나이트레스 인 부산',location:'수영구', text:'같이 가서 인생샷 찍을분',date: '2023-11-13' },
    { id: 2, title: '2023 나이트레스 인 부산', location:'수영구',text:'같이 갈 분 3명 구해요~!',date: '2023-11-14' },
    { id: 3, title: '2023 나이트레스 인 부산', location:'수영구',text:'나이트레스 같이 갈 사람 구합니다.',date: '2023-11-15' },
    { id: 4, title: '2023 나이트레스 인 부산', location:'수영구',text:'파티구함.',date: '2023-11-16' },

  ];
  
  const RoundedBox = styled.div`
    border-radius: 50px;
    border: 2px solid #ccc;
    padding: 10px;
    margin: 10px;
    width: 200px;
    height: 250px;

    justify-content: center;
    text-align: center;
    margin-right: 40px;
  `;

  const ListItem = ({ id, title, location, text,date }) => (
    <RoundedBox key={id}>
      <p>{title}</p>
      <RoundedBox style={{width:'50px',height:'5px',display:'flex',alignItems: 'center', justifyContent: 'center',backgroundColor: '#E3E3E3'}}>
        <p style={{margin:'0',fontSize:'12px' ,color:'#676767'}}>{location}</p>
      </RoundedBox>
      <hr/>
      <p>{text}</p>
      <br/><br/><br/>
      <p style={{fontSize:'12px'}}>{date}</p>
    </RoundedBox>
  );
  
  const ListContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  
  const ListPage = () => (
    <ListContainer>
      {data.map(item => (
        <ListItem key={item.id} {...item} />
      ))}
    </ListContainer>
  );

  export default ListPage;