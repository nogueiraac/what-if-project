import { PageNotFound } from "@/components/PageNotFound";
import { PageTitle } from "@/components/PageTitle";

export default function NotFound() {
  return (
    <>
      <PageTitle 
        title="What if - Codeboost | Página não encontrada" 
        description="Um projeto desenvolvido no curso Codeboost"
      />
      <PageNotFound />
    </>
  ) 
  
}