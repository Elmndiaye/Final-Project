import Header  from '../Components/header';


export default function layout({ children}) {
return{
    <div>
    <Header/>
    {children}
    </div>
}

}