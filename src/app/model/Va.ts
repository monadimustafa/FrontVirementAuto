export class Va{

  constructor(
   public id_client : string,
   public num_compte : string,
   public nom: string,
   public mon_total: number,
   public dateVir: Date,
   public nbr_oper: number,
   public conforme: boolean,
   public status: string,
   public initiateur : string,
   public chemin: any
  ) {
  }
}
