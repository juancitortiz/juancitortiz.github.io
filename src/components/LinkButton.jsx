function LinkButton(params) {
  return(
    <a 
    href={params.params.href} 
    className="link-button"
    target={"_blank"}
    >
      <img 
      src={params.params.src} 
      alt={params.params.alt} 
      />
    </a>
  );
}

export default LinkButton;