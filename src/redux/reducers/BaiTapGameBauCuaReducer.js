
const initialState = {
    danhSachCuoc: [
        {ma:'ga',hinhAnh:'./img/BaiTapGameBauCua/ga.png',diemCuoc:0},
        {ma:'bau',hinhAnh:'./img/BaiTapGameBauCua/bau.png',diemCuoc:0},
        {ma:'ca',hinhAnh:'./img/BaiTapGameBauCua/ca.png',diemCuoc:0},
        {ma:'nai',hinhAnh:'./img/BaiTapGameBauCua/nai.png',diemCuoc:0},
        {ma:'cua',hinhAnh:'./img/BaiTapGameBauCua/cua.png',diemCuoc:0},
        {ma:'tom',hinhAnh:'./img/BaiTapGameBauCua/tom.png',diemCuoc:0},
    ],
    tongDiem:1000,
    mangXucXac: [
        {ma:'nai',hinhAnh:'./img/BaiTapGameBauCua/nai.png'},
        {ma:'cua',hinhAnh:'./img/BaiTapGameBauCua/cua.png'},
        {ma:'tom',hinhAnh:'./img/BaiTapGameBauCua/tom.png'},
    ]
}



export default (state = initialState, action) => {
    switch (action.type) {

        case 'DAT_CUOC_BAU_CUA':{ 
            // console.log('action',action)
            //Tìm trong danhSachCuoc => quân cược nào được click sẽ tăng hoặc giảm điểm
            const danhSachCuocUpdate = [...state.danhSachCuoc];
            const index = danhSachCuocUpdate.findIndex(qc => qc.ma === action.quanCuoc.ma);
            if(index!=-1){
                if(action.tangGiam && state.tongDiem>0)
                {
                    danhSachCuocUpdate[index].diemCuoc += 100;
                    state.tongDiem -=100;
                }else {
                    if(danhSachCuocUpdate[index].diemCuoc > 0) {
                        danhSachCuocUpdate[index].diemCuoc -= 100;
                        state.tongDiem+=100;
                    }
                }
            }

            state.danhSachCuoc = danhSachCuocUpdate;
        }

        default:
            return state
    }
}
