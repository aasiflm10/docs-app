interface DocumentLayoutProps {
    children : React.ReactNode;
};

const DocumentsLayout = ({children} : DocumentLayoutProps) => {
return ( <div className="flex flex-col gap-y-4">
        <p className="w-full bg-red-400">Document Navbar</p>
        {children}
    </div> );
}
 
export default DocumentsLayout;