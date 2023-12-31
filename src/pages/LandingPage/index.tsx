import { PATH } from '@/constants/path';
import { useNavigate } from 'react-router-dom';

const DOCS = 'https://zrr.kr/srtl';

export default function LandingPage() {
    const navigate = useNavigate();

    return (
        <main>
            <h1>Spacewalk Front-end Assignment</h1>
            <h2>강인영</h2>
            <button onClick={() => navigate(PATH.HOME)}>홈으로 가기</button>
            <button onClick={() => window.open(DOCS)}>문서 보러 가기</button>
        </main>
    );
}
