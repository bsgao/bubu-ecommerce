import { Card,CardDescription,CardHeader,CardContent,CardTitle } from "@/components/ui/card";

function getSalesData(){
  

}


export default function AdminDashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <DashboardCard title="Sales" subtitle="text" body="body"></DashboardCard>
      </div>
    


  )
}

type DashboardCardProps = {
  title: string;
  subtitle: string;
  body: string
}

function DashboardCard({title,subtitle,body}:
  DashboardCardProps) {
    return <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{subtitle}</CardDescription>
    </CardHeader>
    <CardContent><p>{body}</p></CardContent>
    
      </Card>
  }