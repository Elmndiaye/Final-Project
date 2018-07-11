import link from 'next/link';

export default function Header(){
    return (
<nav>
<h4> ulaundry </h4>
<link href ="/">
<a> index</a>
</link>
<link href="/dashboard">
<a> dashboard</a>
</link>
<a href="/login" style={{ marginLeft: 10}}>
log in
</a>
</nav>


    )

}