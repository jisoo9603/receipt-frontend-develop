import MypageContent from '../components/member/MypageContent';


function MyPage() {

    const memberId = localStorage.getItem('memberId');

    const url = `/api/v1/members/${memberId}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('회원 정보 조회 실패:', error);
        });

    return (
    <>
        <MypageContent />   
    </>
    );
}

export default MyPage;